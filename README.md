# Ramzinex Task

This project is part of a technical challenge for developing a cryptocurrency platform that lists market data, allows switching between languages, supports offline functionality, and toggles between light and dark themes. The project is built with **React**, **TypeScript**, **Redux Toolkit**, and **Sass**.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [State Management](#state-management)
- [Offline Functionality](#offline-functionality)
- [Theming (Light & Dark Mode)](#theming-light--dark-mode)
- [Internationalization (i18n)](#internationalization-i18n)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Market List**: Fetches and displays a list of cryptocurrency markets.
- **Offline Functionality**: Data is cached locally to allow the app to work without an internet connection.
- **Internationalization (i18n)**: Supports multiple languages with a language switcher.
- **Dark and Light Theme**: Easily switch between light and dark modes.
- **Sorting and Filtering**: Allows users to sort and filter market data.
- **Responsive UI**: Mobile-first design to ensure a great user experience across all devices.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: Type-safe JavaScript to catch errors early.
- **Redux Toolkit**: For managing global state.
- **Redux-Persist**: For persisting data across browser reloads.
- **Sass (SCSS)**: For styling, with support for CSS variables for theming.
- **i18next**: For handling language translations.

## Project Structure

```bash
.
├── src
│   ├── api                 # API service functions
│   ├── components          # Reusable components
│   ├── hooks               # Custom Hooks
│   ├── i18n                # Internationalization (i18next) setup
│   ├── pages               # Page components (e.g., MarketsList)
│   ├── redux               # Redux setup, slices, and actions
│   ├── types               # Global Types
│   ├── App.scss            # Root Style
│   ├── App.tsx             # Root component
│   └── index.scss          # Entry Style
│   └── index.tsx           # Entry point
└── README.md
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/farshaddev/ramzinex-task.git
   cd ramzinex-task
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Project

To start the development server:

```bash
npm start
```

or

```bash
yarn start
```

This will open the project at `http://localhost:3000`.

## State Management

State is managed using **Redux Toolkit**. The `marketSlice.ts` handles the fetching of market data. The state is cached using **Redux-Persist** to ensure that market data remains available even when offline.

Key actions:
- **getMarkets**: Fetches market data from the API and stores it in Redux.
- **getCurrencies**: Fetches currency data and stores it in Redux.

## Offline Functionality

The app uses **Redux-Persist** to save fetched data (markets and currencies) in `localStorage`. If the user loses internet connectivity, the app will automatically load data from local storage.

- **Caching Data**: Data is saved to local storage after successful API calls.
- **Offline Mode**: When offline, the app retrieves data from local storage.

## Theming (Light & Dark Mode)

The app supports light and dark modes. It uses **CSS variables** to control theme colors, and **Redux** to toggle between themes.

To switch themes:
- A **Theme Switcher** button allows users to toggle between light and dark modes.
- The theme preference is stored in Redux and persists across sessions.

## Internationalization (i18n)

The project uses **i18next** for internationalization. Supported languages include English and Persian (or others as needed).

To switch languages:
- Use the **LanguageSwitcher** component, which updates the language in the Redux state and the i18n instance.

### Adding New Languages

To add a new language:
1. Add the language JSON file to `src/i18n/locales/`.
2. Update the `i18n.ts` configuration to include the new language.
3. Use the `t` function in your components to access translations.

## License

This project is licensed under the MIT License.