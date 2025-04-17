# ReactDotNetApp

A responsive web application with React frontend and ASP.NET Core backend.

## Features

- React frontend with Vite
- ASP.NET Core backend
- Entity Framework Core with SQL Server
- RESTful API architecture
- Responsive design

## Prerequisites

- .NET 8 SDK
- Node.js (v18+)
- Visual Studio 2022/VS Code
- SQL Server/LocalDB

## Quick Start

### Backend

```bash
cd ReactDotNetApp.Server
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend

```bash
cd ReactDotNetApp.Client
npm install
npm run dev
```



## API Endpoints

| Method | URL                   | Description             |
|--------|------------------------|-------------------------|
| GET    | `/api/products`        | Get all products        |
| POST   | `/api/products`        | Create product          |
| GET/PUT/DELETE | `/api/products/{id}` | Single product operations |

## Project Structure

```
ReactDotNetApp/
├── ReactDotNetApp.Client/    # React frontend
├── ReactDotNetApp.Server/    # ASP.NET Core backend
│   ├── Controllers/          # API controllers
│   ├── Data/                 # Database context
│   └── Models/               # Data models
```
