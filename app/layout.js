
import "./globals.css";

export const metadata={
title:"AND Hair&Co Cork",
description:"Hair salon in Cork"
};

export default function RootLayout({children}){
return(
<html lang="en">
<body>{children}</body>
</html>
)
}
