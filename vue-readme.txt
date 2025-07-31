# IoT Device Configuration Dashboard - Vue 3

A Vue 3 TypeScript implementation of an IoT Device Configuration Dashboard, migrated from React while maintaining the exact same functionality and appearance.

## Features

- **Message Type Selection**: Choose from Sensor Configuration, Communication Settings, or Power Management
- **Dynamic Form Generation**: Forms are automatically generated based on the selected message type
- **Real-time Feedback**: View device responses with expandable message details
- **Dark/Light Theme**: Toggle between dark and light modes
- **Connection Status**: Visual indicator showing device connection status
- **Local Storage Persistence**: Form data is saved locally
- **Simulated Communication**: Mock ZMQ communication with realistic delays and responses

## Project Structure

```
iot-orchestrator-vue/
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── README.md
├── public/
│   ├── robots.txt
│   └── placeholder.svg
└── src/
    ├── App.vue
    ├── main.ts
    ├── env.d.ts
    ├── assets/
    │   └── styles/
    │       ├── main.css
    │       ├── themes.css
    │       └── components.css
    ├── components/
    │   ├── common/
    │   │   ├── BaseButton.vue
    │   │   ├── BaseCard.vue
    │   │   ├── BaseInput.vue
    │   │   ├── BaseSelect.vue
    │   │   ├── BaseSwitch.vue
    │   │   ├── BaseRadioGroup.vue
    │   │   ├── BaseBadge.vue
    │   │   ├── BaseScrollArea.vue
    │   │   ├── ThemeToggle.vue
    │   │   └── ToastProvider.vue
    │   └── dashboard/
    │       ├── IoTDashboard.vue
    │       ├── DashboardHeader.vue
    │       ├── MessageTypeList.vue
    │       ├── MessageTypeCard.vue
    │       ├── ConfigurationForm.vue (now complete)
    │       ├── FeedbackDisplay.vue
    │       └── FeedbackCard.vue
    ├── composables/
    │   ├── useConnectionStatus.ts
    │   ├── useExpandable.ts
    │   ├── useFeedback.ts
    │   ├── useLocalStorage.ts
    │   ├── useMessageSender.ts
    │   ├── useTextUtils.ts
    │   ├── useTheme.ts
    │   └── useToast.ts
    ├── config/
    │   └── constants.ts
    ├── constants/
    │   └── messageTypes.ts
    ├── router/
    │   └── index.ts
    ├── types/
    │   └── iot.ts
    ├── utils/
    │   ├── feedbackHelpers.ts
    │   ├── helpers.ts
    │   ├── messageSimulation.ts
    │   └── validation.ts
    └── views/
        ├── HomeView.vue
        └── NotFoundView.vue
```

## Technology Stack

- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe development
- **Vue Router**: Client-side routing
- **Vite**: Fast build tool
- **Pure CSS**: No external CSS frameworks, all styles are custom

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Key Implementation Details

### State Management
The application uses Vue 3's Composition API with custom composables for state management:
- `useLocalStorage`: Persists form data
- `useConnectionStatus`: Simulates device connection
- `useFeedback`: Manages feedback messages
- `useTheme`: Handles theme switching
- `useToast`: Displays notifications

### Component Architecture
- **Base Components**: Reusable UI components (BaseButton, BaseCard, BaseInput, etc.)
- **Dashboard Components**: Feature-specific components
- **Pure CSS Styling**: All styles are implemented without external dependencies

### SOLID Principles
- **Single Responsibility**: Each component/composable has one clear purpose
- **Open/Closed**: Components are extensible through props/slots
- **Liskov Substitution**: Base components can be extended without breaking functionality
- **Interface Segregation**: Components only expose necessary props/events
- **Dependency Inversion**: Components depend on abstractions (props/events) not concrete implementations

### DRY Principle
- Shared utilities and helpers prevent code duplication
- Reusable composables for common functionality
- Base components for consistent UI elements

## Migration Notes

This Vue 3 implementation maintains 100% feature parity with the original React application:
- Same visual design and layout
- Identical user interactions
- Equivalent state management patterns
- Matching form validation and error handling
- Same simulated communication behavior

The main differences are:
- Vue 3 Composition API instead of React Hooks
- Vue Router instead of React Router
- Custom CSS instead of Tailwind CSS
- Vue's reactive system instead of React's state management

## Development

The application is designed to work in an isolated network environment with minimal dependencies. All required functionality is implemented without external libraries beyond Vue core packages.