# Getting Started

This is the template project for xsjs Compatability layer

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`xsjs/` | your xsjs code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide

## Next Steps

To run this project for local environment setup

- build hana db run `cds build` 
- deploy to cloudFoundry `cds deploy --to hana` 
- copy generated default-env.json to `cp gen/db/default-env.json xsjs` 
- Open a new terminal and inside the xsjs folder run `npm start` 
- It&apos;s important that the database is up and running

### Running result

```html
XS Layer SAPTICKET_BASE cantidad: 2
Welcome to HANA
```

