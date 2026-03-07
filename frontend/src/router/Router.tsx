// Router.tsx
import { BrowserRouter } from "react-router";
import { AuthProvider } from "../features/auth/contexts/AuthContext";
import { AuthRouter } from "../features/auth/router/AuthRouter";
import { TodoRouter } from "../features/todo/router/TodoRouter";

// useAuth のガードでsignIn/signOut判定、遷移させる
const Router = () => (
  <BrowserRouter>
    <AuthProvider>
      <AuthRouter />
      <TodoRouter />
    </AuthProvider>
  </BrowserRouter>
);
export default Router;
