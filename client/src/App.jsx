import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PropertyList from "./pages/renter/PropertyList";
import PropertyDetails from "./pages/renter/PropertyDetails";
import OwnerDashboard from "./pages/owner/OwnerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProperty from "./pages/owner/AddProperty";
import MyProperties from "./pages/owner/MyProperties";
import OwnerBookings from "./pages/owner/OwnerBookings";
import BookingForm from "./pages/renter/BookingForm";
import MyBookings from "./pages/renter/MyBookings";
import UsersManagement from "./pages/admin/UsersManagement";
import PropertiesManagement from "./pages/admin/PropertiesManagement";
import EditProperty from "./pages/owner/EditProperty";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route  path="/property-details/:id" element={<PropertyDetails />}/>
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-property" element={<AddProperty />}/>
        <Route path="/my-properties" element={<MyProperties />} />
        <Route path="/owner-bookings" element={<OwnerBookings />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/my-bookings" element={<MyBookings/>} />
        <Route
  path="/users-management"
  element={<UsersManagement />}
/>

<Route
  path="/properties-management"
  element={<PropertiesManagement />}
/>
<Route path="/edit-property/:id" element={<EditProperty/>} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;