// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import ModularLayout from './layouts/ModularLayout/ModularLayout'
import LoginPage from './pages/LoginPage/LoginPage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Private unauthenticated="login">
        <Set wrap={ModularLayout}>
          <Private unauthenticated="status" roles="admin">
            <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
              <Route path="/users/new" page={UserNewUserPage} name="newUser" />
              <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
              <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
              <Route path="/users" page={UserUsersPage} name="users" />
            </Set>
          </Private>
          <Private unauthenticated="status" roles={['operator', 'admin']}>
            <Route path="/teleoperation" page={TeleoperationPage} name="teleoperation" />
          </Private>
          <Route path="/" page={StatusPage} name="status" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
