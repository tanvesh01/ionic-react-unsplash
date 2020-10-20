import React, { useState } from "react";
import {
    IonApp,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
} from "@ionic/react";
import { arrowBackOutline, arrowForwardOutline } from "ionicons/icons";
import "./App.css";
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
const App: React.FC = () => {
    const [url, setUrl] = useState<Array<any>>();
    const [count, setCount] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const unsplash = new Unsplash({
        accessKey: "JIQRCSRMQCe0JISYi1KtI0uDJqg0MCAGnC6w5C78Co0",
    });
    const getImages = (i: number) => {
        setIsLoading(true);
        if (i === 1) {
            if (count === 11) {
                setCount(1);
            } else {
                setCount(count + 1);
            }
            console.log(count);
        } else {
            if (count === 1) {
                setCount(11);
            } else {
                setCount(count - 1);
            }
        }
        unsplash.collections
            .getCollectionPhotos(5020650, count, 10, "latest")
            .then(toJson)
            .then((json: any) => {
                console.log(json);
                setUrl(json);
                setIsLoading(false);
            });
    };
    // useEffect(() => {
    // // let thumb, subtitle;

    // }, [])
    return (
        <IonApp>
            <IonContent className="ion-padding">
                <div className="heading">IRONY</div>
                <IonGrid>
                    <IonRow className="ion-align-items-center">
                        <IonCol className="ion-text-center">
                            {" "}
                            <IonButton
                                onClick={() => getImages(1)}
                                disabled={isLoading ? true : false}
                                color="light"
                            >
                                <IonIcon icon={arrowBackOutline} />
                            </IonButton>{" "}
                            <IonButton
                                disabled={isLoading ? true : false}
                                onClick={() => getImages(-1)}
                                color="light"
                            >
                                <IonIcon icon={arrowForwardOutline} />
                            </IonButton>{" "}
                        </IonCol>
                    </IonRow>
                </IonGrid>
                {url?.map((el) => {
                    return (
                        <div style={{ marginBottom: "1rem" }}>
                            <img
                                src={el.urls.thumb}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </div>
                    );
                })}
                {url && url?.length > 0 ? (
                    <IonGrid>
                        <IonRow className="ion-align-items-center">
                            <IonCol className="ion-text-center">
                                {" "}
                                <IonButton
                                    onClick={() => getImages(1)}
                                    disabled={isLoading ? true : false}
                                    color="light"
                                >
                                    <IonIcon icon={arrowBackOutline} />
                                </IonButton>{" "}
                                <IonButton
                                    disabled={isLoading ? true : false}
                                    onClick={() => getImages(-1)}
                                    color="light"
                                >
                                    <IonIcon icon={arrowForwardOutline} />
                                </IonButton>{" "}
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                ) : null}
            </IonContent>
        </IonApp>
    );
};

export default App;
