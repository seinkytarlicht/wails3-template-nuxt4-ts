# Wails v3 Template With Nuxt v4

A minimal [Wails v3](https://v3.wails.io/) template based on [Nuxt v4](https://nuxt.com/) ecosystem, combining the developer experience of Nuxt with the amazing performance of Wails to build cross-platform desktop GUI apps.

<img width="1160" height="789" alt="Wails v3 Template for Nuxt v4" src="https://github.com/user-attachments/assets/c3793c37-a516-4fe1-a935-ea4e6482fb7d" />

## Tech Stack

| Module   | Technology |
| -------- | ---------- |
| Desktop  | Wails v3   |
| Frontend | Nuxt v4    |

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

Compile and build app:

```bash
wails3 task build
```

Packaging:

```bash
wails3 task package
```

The output binary will be available in the `bin/` directory.

## Having a Problem?

Feel free to [open an issue](../../issues) and describe your problem.

## Further Help

- [Wails v3 Documentation](https://v3.wails.io/)
- [Nuxt v4 Documentation](https://nuxt.com/docs)
- [Wails Community Discord](https://discord.gg/JDdSxwjhGf)

## License

MIT
