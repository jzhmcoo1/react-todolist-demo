import { Layout } from "antd";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { TodoProvider } from "./utils/context";
import "./App.css";

function App() {
  return (
    <div>
      <TodoProvider>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <MainSection />
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </TodoProvider>
    </div>
  );
}

export default App;
