# Getting Started

Welcome to your new CAP project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`srv/` | your service models and code go here
`readme.md` | this getting started guide

## Project Setup Commands

Commands used to set up and evolve this project:

```sh
cds init
cds add ias
cds add ams
cds add typescript
cds add mta
npm install
```

## Build

```sh
mbt build
```

## Deploy

```sh
cf deploy mta_archives/cap-s4-iflow_1.0.0.mtar
```
## Learn More

Learn more at <https://cap.cloud.sap>.
