import {ReactComponent as Email} from "./../assets/icons/Email.svg";
import {ReactComponent as GitHub} from "./../assets/icons/GitHub.svg";
import {ReactComponent as LinkedIn} from "./../assets/icons/LinkedIn.svg";
import {ReactComponent as Next} from "./../assets/icons/Next.svg";
import {ReactComponent as ReactNative} from "./../assets/icons/ReactNative.svg";
import {ReactComponent as React} from "./../assets/icons/React.svg";
import {ReactComponent as TypeScript} from "./../assets/icons/TypeScript.svg";
import {ReactComponent as Web} from "./../assets/icons/Web.svg";
import {ReactComponent as Python} from "./../assets/icons/Python.svg";
import {ReactComponent as CSharp} from "./../assets/icons/C Sharp.svg";
import {ReactComponent as Docker} from "./../assets/icons/Docker.svg";
import {ReactComponent as Express} from "./../assets/icons/Express.svg";
import {ReactComponent as FastApi} from "./../assets/icons/Fast Api.svg";
import {ReactComponent as Go} from "./../assets/icons/Go.svg";
import {ReactComponent as Java} from "./../assets/icons/Java.svg";
import {ReactComponent as JavaScript} from "./../assets/icons/JavaScript.svg";
import {ReactComponent as Sql} from "./../assets/icons/Sql.svg";
import {ReactComponent as NodeJs} from "./../assets/icons/NodeJs.svg";
import {ReactComponent as MongoDb} from "./../assets/icons/MongoDb.svg";
import {ReactComponent as GooglePlay} from "./../assets/icons/GooglePlay.svg";
import {TIcons} from "src/types/types";

export const getIcon = (name: TIcons, clase: string) => {
  if (name.includes("GitHub")) name = "GitHub";
  const icons = {
    Email: <Email className={clase} />,
    GitHub: <GitHub className={clase} />,
    LinkedIn: <LinkedIn className={clase} />,
    Next: <Next className={clase} />,
    "React Native": <ReactNative className={clase} />,
    React: <React className={clase} />,
    TypeScript: <TypeScript className={clase} />,
    Web: <Web className={clase} />,
    Python: <Python className={clase} />,
    Tkinter: <Python className={clase} />,
    "C#": <CSharp className={clase} />,
    Docker: <Docker className={clase} />,
    Express: <Express className={clase} />,
    "Fast Api": <FastApi className={clase} />,
    Go: <Go className={clase} />,
    Java: <Java className={clase} />,
    JavaScript: <JavaScript className={clase} />,
    SQL: <Sql className={clase} />,
    MongoDb: <MongoDb className={clase} />,
    "Google Play Store": <GooglePlay className={clase} />,
    "Node.js": <NodeJs className={clase} />,
  };
  return icons[name];
};
