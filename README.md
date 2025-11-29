# surf-camps-travel-booking

A travel booking and community platform for surf camps, allowing users to discover, book, and share experiences.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/iDPu9k4ToTRIUNbmTPW4VF/Free-Website-Template-%7C-Surf-Camps---Travel-Booking-Agency--Community-?node-id=388-8389&t=yZyHMzNDjHCHPP2m-1))

## Project Structure

```
surf-camps-travel-booking/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- Search and filter surf camps
- View surf camp details and photos
- Book and pay for surf camps online
- Share surf camp experiences and photos with the community

## API Endpoints

- `GET /surf-camps` - Retrieve a list of all surf camps
- `GET /surf-camps/:id` - Retrieve a specific surf camp by ID
- `POST /surf-camps` - Create a new surf camp
- `PUT /surf-camps/:id` - Update a surf camp
- `DELETE /surf-camps/:id` - Delete a surf camp
- `POST /bookings` - Create a new booking
- `GET /bookings/:id` - Retrieve a specific booking by ID

## License

MIT
