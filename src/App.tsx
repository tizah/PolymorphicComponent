import * as React from "react";
import { Text } from "./Text";

export default function App() {
  return (
    <main>
      <Text as="h1"> Good to Test</Text>
      <Text as="h2" href="www.google.com">
        Next Good Google
      </Text>
      <Text as="a" href="www.facebook.com">
        facebook
      </Text>
    </main>
  );
}
