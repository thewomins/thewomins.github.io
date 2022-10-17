export type refChip = {
  labelShow: boolean;
  setLabel: (show: boolean) => void;
};

export type TProyect = {
  nombreProyecto: string;
  imagen: string;
  lenguajes: string[];
  description: string;
  links: {
    [nombreLink: string]: string;
  };
};

export type TWork = {
  [nombreEmpresa: string]: {
    cargo: string;
    fechaInicio: string;
    fechaTermino: string;
    hechos: string[];
  };
};

export type TTheme = {
  seed: string;
  onSeed: string;
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secundary: string;
  onSecundary: string;
  secundaryContainer: string;
  onSecundaryContainer: string;
  tertiary: string;
  onTertiaty: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  background2: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  outline: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  shadow: string;
  shadowTransparency: string;
  opacityHover: string;
};

export type TThemesAvailable = "light" | "dark";

export type reducerActionTheme = {
  type: "changeThemeTo";
  themeName: TThemesAvailable;
};

export type TScreens = "Acerca de" | "Experiencia" | "Proyectos" | "Contacto";

export type TIcons =
  | "Email"
  | "GitHub"
  | "LinkedIn"
  | "Next"
  | "React Native"
  | "TypeScript"
  | "Web"
  | "Python"
  | "Tkinter"
  | "C#"
  | "Docker"
  | "Express"
  | "Fast Api"
  | "Go"
  | "Java"
  | "JavaScript"
  | "SQL"
  | "MongoDb"
  | "Node.js"
  | "Google Play Store";
