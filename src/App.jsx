import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./Components/Cart/CartView";
import { ProductFormContainer } from "./Components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./Components/adminComponents/ProductSuccess";

import { PublicLayout } from "./Layouts/PublicLayout";
import { AdminLayout } from "./Layouts/AdminLayout";
import { ProtectedRoute} from "./Components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./Components/adminComponents/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        {/* ----------------------Rutas publicas-------------------------*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
        </Route>

        {/* IMPORTAR EL COMPONENTE LOGIN */}
        {/* <Route path="/admin/login" element={<Login />} /> */}
        <Route path="/admin/login" element={<h2>LOGIN</h2>} />


        {/* -----------------------------Admin--------------------------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Si el admin esta logueado, redirige a la ruta /admin/dashboard */}
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products/new" element={<ProductFormContainer />} />
          <Route path="products/success/:id" element={<ProductSuccess />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
