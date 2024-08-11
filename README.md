# EmployeeManagement

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

# Live Demo:

The application is live at: https://employee-management-infrrd.web.app

# About the App:

This Employee Management app is a small proof-of-concept (POC) created with simplicity in mind, avoiding the use of CSS frameworks and complex design patterns due to time constraints. The app structure is straight forward:

# Component Structure:

All components are located inside the app/components folder.
The Home component serves as the main container, housing all other components.
Child components are organized under their respective parent components.

# Shared Components:

Reusable components, such as the custom select and popover, are located in the shared/components folder.
A shared service is also housed in the shared folder.

# Data Source:

Employee data is stored in assets/db/db.json.

# Functionality:

The app includes basic filtering features from these 3 places:

# Search Panel:

Opens via the "Search" menu item in the sidebar.
Includes submit and clear buttons to filter employee data.

# Team Selection Dropdown:

Located in the header, allows filtering by team.

# "Show Only Bangalore Employees" Checkbox:

Filters employees to display only those based in Bangalore.

For simplicity, all filtering operations are performed on the original employee data, rather than chaining filters on already filtered data.

# Custom Components:

Given the restriction of not using CSS frameworks, custom components were developed for key UI elements:

# Custom Select:

Displays selected values and a placeholder when empty.
Closes when clicking outside the component.
Passes the selected value back to the parent component.

# Popover:

Designed with similar considerations as custom select, allowing for interaction and closing on outside click.

# P.S
Due to lack of clarity i have chosen to make employee cards a bit responsive as opposed to showing fixed 4 cards as in shared design.    
