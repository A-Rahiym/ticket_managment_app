# Ticket Management System

A modern, responsive ticket management system built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 **Vibrant Design** - Modern UI with purple/pink gradients and neon green accents
- 🌊 **Wavy SVG Effects** - Beautiful animated wave on the landing page
- 🎫 **Full CRUD Operations** - Create, read, update, and delete tickets
- 📊 **Dashboard** - Overview of ticket statistics
- 🔐 **Authentication UI** - Login and signup screens
- 📱 **Responsive** - Works on all devices
- ♿ **Accessible** - WCAG Level AA compliant
- 🎯 **Status Management** - Color-coded ticket statuses (Open: Green, In Progress: Amber, Closed: Gray)

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **Vite** - Build tool
- **Sonner** - Toast notifications

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed on your system

### Installation

1. **Clone or download the project to your local device**

2. **Navigate to the project directory**
   ```bash
   cd ticket-management-system
   ```

3. **Install dependencies**
   
   Using npm:
   ```bash
   npm install
   ```
   
   Using yarn:
   ```bash
   yarn install
   ```
   
   Using pnpm:
   ```bash
   pnpm install
   ```

4. **Start the development server**
   
   Using npm:
   ```bash
   npm run dev
   ```
   
   Using yarn:
   ```bash
   yarn dev
   ```
   
   Using pnpm:
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   
   The application will be running at `http://localhost:5173` (default Vite port)

### Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── App.tsx                      # Main app component with routing
├── main.tsx                     # Application entry point
├── index.html                   # HTML template
├── components/
│   ├── Auth.tsx                # Authentication component
│   ├── Dashboard.tsx           # Dashboard with statistics
│   ├── Landing.tsx             # Landing page
│   ├── Navbar.tsx              # Navigation bar
│   ├── TicketManagement.tsx    # Ticket CRUD interface
│   ├── WaveBackground.tsx      # Wavy SVG component
│   └── ui/                     # shadcn/ui components
├── styles/
│   └── globals.css             # Global styles and Tailwind config
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
└── tsconfig.json               # TypeScript configuration
```

## Usage

### Landing Page
- Navigate to `/` to see the landing page
- Click "Get Started" to go to signup
- Click "Sign In" to go to login

### Authentication
- Demo credentials work with any email/password combination
- Login at `/login`
- Signup at `/signup`

### Dashboard
- View ticket statistics
- Quick access to ticket management

### Ticket Management
- Create new tickets with the "New Ticket" button
- Filter tickets by status (All, Open, In Progress, Closed)
- Search tickets by title or assignee
- Edit tickets using the dropdown menu
- Delete tickets with confirmation
- Select multiple tickets with checkboxes

## Color Scheme

- **Primary**: Vibrant Purple (#A855F7)
- **Accent**: Vibrant Pink/Magenta (#EC4899)
- **Neon Green**: Button borders and accents (#10B981)
- **Status Colors**:
  - Open: Green tones
  - In Progress: Amber tones
  - Closed: Gray tones

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

Built with modern web technologies and best practices.
