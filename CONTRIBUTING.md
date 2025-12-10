# Contributing to DevMetrics Pro AI

First off, thank you for considering contributing to DevMetrics Pro AI! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by respect and professionalism. Please be kind and courteous.

## 💡 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear use case**
- **Why this enhancement would be useful**
- **Possible implementation approach**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code lints
5. Issue that pull request!

## 🛠️ Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/devmetrics-pro-ai.git
cd devmetrics-pro-ai

# Install dependencies
npm install

# Create .env.local
cp .env.example .env.local
# Add your API keys

# Start development
npm run dev
npm run studio
```

## 🔄 Pull Request Process

1. **Update Documentation**: Update the README.md with details of changes if needed
2. **Follow Code Style**: Ensure your code follows the existing style
3. **Test Thoroughly**: Make sure all existing tests pass and add new ones if needed
4. **Descriptive Commits**: Use clear and descriptive commit messages
5. **Link Issues**: Reference any related issues in your PR description

### Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Example:**

```
feat(scenes): add new contribution timeline scene

- Implemented animated timeline visualization
- Added smooth transitions between years
- Integrated with GitHub API data

Closes #123
```

## 📝 Style Guidelines

### TypeScript Style Guide

- Use TypeScript for all new code
- Follow existing patterns in the codebase
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer functional components with hooks

### React/Remotion Guidelines

- Keep components small and focused
- Use proper prop types
- Leverage Remotion's interpolation for smooth animations
- Follow the composition pattern

### CSS/Tailwind Guidelines

- Use Tailwind utility classes
- Keep custom CSS minimal
- Follow the existing design system
- Ensure responsive design

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build project
npm run build

# Test rendering
npm run render
```

## 📚 Resources

- [Remotion Documentation](https://www.remotion.dev/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎯 Priority Areas

We're especially interested in contributions in these areas:

- New animation scenes
- Additional data source integrations
- Performance optimizations
- Documentation improvements
- Bug fixes

## ❓ Questions?

Feel free to open an issue with the `question` label or reach out to [@AshrafMorningstar](https://github.com/AshrafMorningstar).

---

**Thank you for contributing to DevMetrics Pro AI! 🚀**

_Created by [AshrafMorningstar](https://github.com/AshrafMorningstar)_
