# API Reference

## Authentication

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

## Projects

```
GET    /api/projects
POST   /api/projects
GET    /api/projects/:id
PUT    /api/projects/:id
DELETE /api/projects/:id
```

## Builds

```
GET  /api/build
POST /api/build
GET  /api/build/:id
```

## Deployments

```
GET    /api/deployments
POST   /api/deployments
GET    /api/deployments/:id
DELETE /api/deployments/:id
```

## Models

```
GET  /api/models
POST /api/models/download
POST /api/models/infer
```
