# Wails 3 Template for Nuxt 4

A minimal [Nuxt 4](https://nuxt.com/) template for [Wails 3](https://v3.wails.io/), combining the developer experience of Nuxt with the amazing performance of Wails to build cross-platform desktop GUI apps.

<img width="1160" height="789" alt="Wails 3 Template for Nuxt 4" src="https://github.com/user-attachments/assets/c3793c37-a516-4fe1-a935-ea4e6482fb7d" />

## Prerequisites

Before getting started, make sure you have the following installed:

- [Go](https://go.dev/doc/install) (latest stable version)
- [Wails 3 CLI](https://v3.wails.io/quick-start/installation/)
- [Node.js](https://nodejs.org/) (LTS recommended)

## Getting Started

### Initialize from Template

```bash
wails3 init -n "Your Project Name" -t https://github.com/seinkytarlicht/wails3-template-nuxt4-ts
```

## Development

Start the development server with hot-reload:

```bash
wails3 task dev
```

## Build

Compile and build the production app:

```bash
wails3 task build
```

The output binary will be available in the `bin/` directory.

## Having a Problem?

### null is not an object (evaluating 'instance.__vrv_devtools = info')
<img width="500" alt="Screenshot_20260626_220315" src="https://github.com/user-attachments/assets/24df0582-3b8d-4b10-b95d-7da1454f613d" />

if you have a problem like that, try to reload the browser in the window. Right click in the window and reload. If not fixed, try to disable Nuxt's Dev Tools

idk why that happens, it might be related to Nuxt's DevTools.

> In the meantime, feel free to [open an issue](../../issues) and describe your problem.

## Further Help

- [Wails 3 Documentation](https://v3.wails.io/)
- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Wails Community Discord](https://discord.gg/JDdSxwjhGf)

## License

MIT
