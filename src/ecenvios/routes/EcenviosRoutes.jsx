import { Navigate, Route, Routes } from "react-router-dom";
import { EcenviosPage } from "../page/EcenviosPage";
import { FAGPage, InicioPage, PreferencesApp, Profile, WhyUs } from "../views/";
import { RemitenteForm } from "../views/RemitenteForm";
import { DestinatarioForm } from "../views/DestinatarioForm";
import { ReviewData } from "../views/ReviewData";
import { TrackingNumber } from "../views/TrackingNumber";

export const EcenviosRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <EcenviosPage /> }>
        <Route path="InicioPage" element={ <InicioPage /> } />
        <Route path="FAQPage" element={ <FAGPage /> } />
        <Route path="WhyUs" element={ <WhyUs /> } />
        <Route path="/" element={ <Navigate to="InicioPage" /> } />
        <Route path="RemitenteForm" element={ <RemitenteForm/> } />
        <Route path="DestinatarioForm" element={<DestinatarioForm />}/>
        <Route path="/ReviewData" element={<ReviewData />} />
        <Route path="/TrackingNumber" element={<TrackingNumber />} />
        <Route path="/PreferencesApp" element={ <PreferencesApp /> } />
        <Route path="/Profile" element={ <Profile /> } />
      </Route>
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  );
}
