import React, { useState } from "react";
import {
    IonApp,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonList,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle
} from "@ionic/react";
import { alertOutline } from "ionicons/icons";
// @ts-ignore
import Unsplash, { toJson } from "unsplash-js";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
    let tasks: Array<String> = ["Tanvesh"];

const App: React.FC = () => {
    const [text, setText] = useState<number>();
    const [url, setUrl] = useState<Array<any>>();
    const unsplash = new Unsplash({
        accessKey: "JIQRCSRMQCe0JISYi1KtI0uDJqg0MCAGnC6w5C78Co0",
    });
    let count;
    const getImages = () =>{
        // unsplash.photos.getRandomPhoto({ count: text }).then(toJson).then((json :any) =>{
        //     console.log(json);
        //     setUrl(json);
        //     // console.log(json.urls.thumb)
        // })
        unsplash.collections.getCollectionPhotos(5020650, 1 , 10, "latest")
            .then(toJson)
            .then((json : any) => {
                console.log(json)
                setUrl(json)
            });
    }
    // useEffect(() => {
    // // let thumb, subtitle;
        
    // }, [])
    return (
        <IonApp>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center">
                            <IonButton onClick={()=> getImages() } color="primary">
                                <IonIcon slot="start" icon={alertOutline} />
                                
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <h2>{text}</h2>
                {url?.map(el=>{
                    return <div>
                        <img src={el.urls.thumb} alt="" style={{width:"100%"}} />
                        {/* <IonCardHeader>
                            <IonCardSubtitle></IonCardSubtitle>
                        </IonCardHeader> */}
                </div>
                })}
                
            </IonContent>
        </IonApp>
    );
};

export default App;
