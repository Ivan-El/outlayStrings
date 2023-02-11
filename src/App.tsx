import React, {FC} from 'react';
import * as layout from './components/layout';
import OutlaysPage from "./pages/OutlaysPage";

const App: FC = () => {
  return (
      <layout.AppLayout>
          <OutlaysPage />
      </layout.AppLayout>
  );
};

export default App;
