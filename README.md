# Dashboard Implementation

## Overview
This project involves creating a responsive dashboard using React. The dashboard is designed to guide users through a series of tasks (Preliminary, Your Details, KYC, Parties, Claim, Review, Payment), with a progress bar indicating completion status.

## Approach
1. **Component-Based Architecture**: 
   - Divided the dashboard into reusable components such as `Navigation`, `FormSection`, and individual task components (`ProgessBar`, `Claim`).
   - Ensured each component has a clear responsibility and can be independently maintained.

2. **State Management**:
   - Used React's `useState` hook to manage the state of task completion.
   - Created a `activeStep` state array to keep track of which tasks have been completed.
   - Updated the state through the `setActiveStep` function, which progresses the task completion status and renders the corresponding task component dynamically.

3. **Responsive Design**:
   - Utilized CSS flexbox for flexible and responsive layouts.
   - Implemented media queries to adjust styles for different screen sizes, ensuring the dashboard adapts seamlessly across desktop, tablet, and mobile views.
   - Tested the application on various devices to ensure consistent user experience.

4. **Dynamic Task Progression**:
   - Developed a system to conditionally render task components based on their completion status.
   - Updated the `ProgressBar` component to reflect the current progress visually.
   - Ensured that once a task is marked as completed, the next task becomes available for interaction.

## Challenges
1. **Dynamic Rendering and State Management**:
   - **Challenge**: Ensuring tasks render dynamically and state updates correctly.
   - **Solution**: Used `activeStep` hooks and conditional rendering to manage and reflect progress accurately. The `setActiveStep` function updates the `activeStep` array, triggering re-renders.

2. **Responsive Design**:
   - **Challenge**: Ensuring the dashboard is visually appealing and functional across different screen sizes.
   - **Solution**: Implemented CSS flexbox for flexible layouts and media queries to handle various screen widths. Tested the application on multiple devices to ensure responsiveness.

3. **CSS Styling Conflicts**:
   - **Challenge**: Preventing CSS styles from affecting other components.
   - **Solution**: Utilized CSS modules to scope styles to specific components, ensuring isolation and preventing style leakage.

4. **Task Completion Flow**:
   - **Challenge**: Ensuring that tasks must be completed in a linear sequence.
   - **Solution**: Managed task progression through state updates, ensuring each task is completed before the next one becomes available.

## Assumptions
1. **Linear Task Completion**:
   - Assumed that tasks need to be completed sequentially, and the next task becomes available only after the previous one is completed.

2. **Design Reference**:
   - Followed the provided screenshot as the primary design reference, interpreting the layout and styling details to ensure visual accuracy.

3. **Functionality Scope**:
   - Focused on the visual layout and basic interaction for task completion, without implementing backend integration or advanced form validation.
   - Assumed the scope was limited to the front-end implementation as per the provided screenshot.

## Screenshots
### Desktop View
![Desktop View](dashboard/screenshot/desktop_view.png)

### Tablet View
![Tablet View](dashboard/screenshot/tablet_view.png)

### Mobile View
<div style="display: flex; justify-content: space-between;">
  <img src="dashboard/screenshot/mobile_view1.png" alt="Mobile View 1" style="width: 45%;">
  <img src="dashboard/screenshot/mobile_view2.png" alt="Mobile View 2" style="width: 45%;">
</div>

## Instructions to Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/dashboard.git
   cd dashboard
2. **Install dependencies**:
   ```bash
   npm install
3. **Start the application**:
   ```bash
   npm run dev      
