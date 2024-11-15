import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { PageRoutes, publicRoutes } from "./routes";

const Root = () => {
  return (
    <Suspense fallback={"loading...."}>
      <Routes>
        <Route index element={<Navigate to={PageRoutes.Orders} />} />

        {publicRoutes.map(({ path, componentPath: PageComponent }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={"Loading..."}>
                <PageComponent />
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<Navigate to={PageRoutes.Orders} />} />
      </Routes>
    </Suspense>
  );
};

export default Root;
