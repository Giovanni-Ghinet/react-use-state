import Card from "./components/Card";
import languages from "./data/languages";
  
function App() {
  return <>
      {
        languages.map(language => {
          return <Card key={language.id}
            buttonTitle={language.title}
            buttonContent={language.description}
          />
        })
      }
  </>
    
  ;
}
export default App;
