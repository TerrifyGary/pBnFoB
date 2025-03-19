# pBnFoB
Sure! Here’s the content formatted as a `README.md` file:

```markdown
# Project Overview

This project consists of a full-stack web application with the following technologies:

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/)
- **Database**: [Oracle DB](https://www.oracle.com/database/)
- **Containerization**: [Docker](https://www.docker.com/)

The application is designed to be fully containerized using Docker and Docker Compose, with three separate services for the frontend, backend, and Oracle database.

## Project Structure

- **Frontend**: Next.js application responsible for user interaction.
- **Backend**: FastAPI backend providing RESTful APIs.
- **Database**: Oracle DB for storing application data.

## Setup and Installation

### Prerequisites

Ensure you have the following tools installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build and start the services using Docker Compose:
   ```bash
   docker-compose up --build
   ```

   This will start the following services:

   - **Oracle Database**: Accessible on port `1521`.
   - **FastAPI Backend**: Accessible on port `8000`.
   - **Next.js Frontend**: Accessible on port `3000`.

### Configuration

- **Oracle Database**:
  - The default password for the Oracle Database is set to `your_password` in the `docker-compose.yml`. Update this value as necessary.

- **Backend**:
  - The FastAPI backend is configured to connect to the Oracle database using the connection string:
    ```
    oracle+cx_oracle://system:your_password@oracle-db:1521/XEPDB1
    ```

- **Frontend**:
  - The Next.js frontend is set to interact with the backend API at `http://backend:8000`.

## Usage

Once the services are up and running, you can access the following:

- **Frontend**: Open `http://localhost:3000` in your browser to view the application.
- **Backend**: The FastAPI backend can be accessed at `http://localhost:8000`.
- **Swagger UI**: Access the Swagger API documentation for the backend at `http://localhost:8000/docs`.

## Docker Compose Overview

The `docker-compose.yml` file defines the following services:

- **oracle-db**: An Oracle Database container.
- **backend**: The FastAPI backend container.
- **frontend**: The Next.js frontend container.

Each service is configured to communicate with the others through Docker's internal network.

## Volumes

- **oracle-data**: A volume to persist Oracle database data.

## License

This project is licensed under the MIT License.
```

You can save the above content into a file named `README.md` in the root of your project. Let me know if you need further adjustments!
