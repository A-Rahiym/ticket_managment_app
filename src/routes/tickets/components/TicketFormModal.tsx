import { useState, useEffect } from "react";
import { Ticket } from "../../../types/ticket";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../../../components/ui/dialog";

interface TicketFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  ticket: Ticket | null;
  onSubmit: (data: Omit<Ticket, "id" | "createdAt">) => void;
}

export function TicketFormModal({ open, onOpenChange, ticket, onSubmit }: TicketFormModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    status: "open" as "open" | "in_progress" | "closed",
    description: "",
    priority: "medium" as "low" | "medium" | "high",
    assignee: "",
  });

  const [errors, setErrors] = useState<{ title?: string; assignee?: string }>({});

  useEffect(() => {
    if (ticket) {
      setFormData({
        title: ticket.title,
        status: ticket.status,
        description: ticket.description,
        priority: ticket.priority,
        assignee: ticket.assignee,
      });
    } else {
      resetForm();
    }
  }, [ticket]);

  const resetForm = () => {
    setFormData({
      title: "",
      status: "open",
      description: "",
      priority: "medium",
      assignee: "",
    });
    setErrors({});
  };

  const validateForm = (data: typeof formData) => {
    const newErrors: { title?: string; assignee?: string } = {};

    if (!data.title.trim()) {
      newErrors.title = "Title is required";
    } else if (data.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!data.assignee.trim()) {
      newErrors.assignee = "Assignee is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm(formData)) {
      onSubmit(formData);
      onOpenChange(false);
      resetForm();
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    resetForm();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="rounded-3xl max-w-md sm:max-w-lg md:max-w-2xl p-4 sm:p-6 animate-in fade-in">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">
            {ticket ? "Edit Ticket" : "Create New Ticket"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-5">
          <div>
            <Label htmlFor="title" className="text-xs sm:text-sm font-medium">
              Title *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`mt-1 sm:mt-1.5 h-10 sm:h-11 rounded-xl ${
                errors.title ? "border-red-500" : ""
              }`}
              placeholder="Enter ticket title"
              aria-invalid={!!errors.title}
              aria-describedby={errors.title ? "title-error" : undefined}
            />
            {errors.title && (
              <p id="title-error" className="text-xs text-red-500 mt-1">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="assignee" className="text-xs sm:text-sm font-medium">
              Assignee *
            </Label>
            <Input
              id="assignee"
              value={formData.assignee}
              onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
              className={`mt-1 sm:mt-1.5 h-10 sm:h-11 rounded-xl ${
                errors.assignee ? "border-red-500" : ""
              }`}
              placeholder="Enter assignee name"
              aria-invalid={!!errors.assignee}
              aria-describedby={errors.assignee ? "assignee-error" : undefined}
            />
            {errors.assignee && (
              <p id="assignee-error" className="text-xs text-red-500 mt-1">
                {errors.assignee}
              </p>
            )}
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <Label htmlFor="status" className="text-xs sm:text-sm font-medium">
                Status
              </Label>
              <Select
                value={formData.status}
                onValueChange={(value: any) =>
                  setFormData({ ...formData, status: value })
                }
              >
                <SelectTrigger id="status" className="mt-1 sm:mt-1.5 h-10 sm:h-11 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="closed">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="priority" className="text-xs sm:text-sm font-medium">
                Priority
              </Label>
              <Select
                value={formData.priority}
                onValueChange={(value: any) =>
                  setFormData({ ...formData, priority: value })
                }
              >
                <SelectTrigger id="priority" className="mt-1 sm:mt-1.5 h-10 sm:h-11 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="description" className="text-xs sm:text-sm font-medium">
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="mt-1 sm:mt-1.5 rounded-xl h-24 sm:h-32"
              placeholder="Enter ticket description (optional)"
              rows={4}
            />
          </div>
        </div>

        <DialogFooter className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button
            variant="outline"
            onClick={handleClose}
            className="rounded-xl border-2 border-[hsl(var(--neon-green))] shadow-md shadow-[hsl(var(--neon-green))]/20"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="rounded-xl bg-purple-600 hover:bg-purple-700 text-white 
             font-semibold border-2 border-purple-400 
             shadow-lg shadow-purple-400/40 transition-all duration-300 
             hover:scale-105"
          >
            {ticket ? "Update" : "Create"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}