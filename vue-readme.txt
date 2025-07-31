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

Build Order - Step by Step
Phase 1: Project Setup

Create project directory and initialize:
bashmkdir iot-orchestrator-vue
cd iot-orchestrator-vue
npm init -y

package.json - Copy the package.json file and run:
bashnpm install

tsconfig.json
tsconfig.app.json
tsconfig.node.json
vite.config.ts
.gitignore
index.html

Phase 2: Core Structure

src/main.ts
src/env.d.ts
src/App.vue (basic version first, without ErrorBoundary)

Phase 3: Styles

src/assets/styles/main.css
src/assets/styles/themes.css
src/assets/styles/components.css

Phase 4: Types and Constants

src/types/iot.ts
src/config/constants.ts
src/constants/messageTypes.ts

Phase 5: Utilities

src/utils/helpers.ts
src/utils/validation.ts
src/utils/feedbackHelpers.ts
src/utils/messageSimulation.ts

Phase 6: Basic Composables

src/composables/useTheme.ts
src/composables/useLocalStorage.ts
src/composables/useTextUtils.ts
src/composables/useDebounce.ts
src/composables/useExpandable.ts

Phase 7: Router and Views

src/router/index.ts
src/views/HomeView.vue
src/views/NotFoundView.vue

Phase 8: Base Components

src/components/common/BaseButton.vue
src/components/common/BaseCard.vue
src/components/common/BaseInput.vue
src/components/common/BaseScrollArea.vue
src/components/common/BaseBadge.vue
src/components/common/BaseSwitch.vue
src/components/common/BaseSelect.vue
src/components/common/BaseRadioGroup.vue
src/components/common/LoadingSpinner.vue
src/components/common/ThemeToggle.vue

Phase 9: Advanced Composables

src/composables/useConnectionStatus.ts
src/composables/useFeedback.ts
src/composables/useToast.ts
src/composables/useMessageSender.ts

Phase 10: Dashboard Components

src/components/dashboard/DashboardHeader.vue
src/components/dashboard/MessageTypeCard.vue
src/components/dashboard/MessageTypeList.vue
src/components/dashboard/FeedbackCard.vue
src/components/dashboard/FeedbackDisplay.vue
src/components/dashboard/ConfigurationForm.vue
src/components/dashboard/IoTDashboard.vue

Phase 11: Final Components

src/components/common/ToastProvider.vue
src/components/common/ErrorBoundary.vue

Phase 12: Update App.vue

Update src/App.vue to include ErrorBoundary and ToastProvider

Phase 13: Public Assets

public/robots.txt
public/placeholder.svg

Phase 14: Documentation

README.md

Testing After Each Phase
After completing each phase, you can test:

After Phase 2: Run npm run dev - should see a basic Vue app
After Phase 3: Should see proper styling applied
After Phase 7: Router should work with home and 404 pages
After Phase 8: Test individual base components
After Phase 10: Full application should be functional