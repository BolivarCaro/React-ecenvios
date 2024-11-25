import { Navigate, Route, Routes } from "react-router-dom";
import { EcenviosPage } from "../page/EcenviosPage";
import { FAGPage, InicioPage, WhyUs } from "../views/";
import { RemitenteForm } from "../views/RemitenteForm";
import { DestinatarioForm } from "../views/DestinatarioForm";
import { ReviewData } from "../views/ReviewData";

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
        <Route path="/review" element={<ReviewData />} />
      </Route>
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  );
}
