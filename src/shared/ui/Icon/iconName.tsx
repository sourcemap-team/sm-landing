import React from 'react';

export type IconNames = Readonly<Record<string, React.ReactNode>>;

export const iconNames: IconNames = {
  //w24h24
  planet: (
    <path d="M12 2C6.489 2 2 6.489 2 12s4.489 10 10 10 10-4.489 10-10S17.511 2 12 2Zm0 2c.248 0 .52.102.867.432s.723.883 1.047 1.611c.246.554.448 1.23.621 1.957h-5.07c.173-.726.375-1.403.62-1.957.324-.728.701-1.281 1.048-1.611.347-.33.619-.432.867-.432Zm-3.549.834c-.065.13-.132.26-.193.396-.362.814-.643 1.756-.854 2.77H5.072a7.99 7.99 0 0 1 3.38-3.166Zm7.098 0A7.99 7.99 0 0 1 18.928 8h-2.332c-.211-1.014-.492-1.956-.854-2.77-.06-.137-.128-.265-.193-.396ZM4.262 10h2.836A21.14 21.14 0 0 0 7 12c0 .686.036 1.353.098 2H4.262A8.028 8.028 0 0 1 4 12c0-.693.098-1.36.262-2Zm4.855 0h5.766c.07.643.117 1.307.117 2 0 .693-.048 1.357-.117 2H9.117A18.472 18.472 0 0 1 9 12c0-.693.048-1.357.117-2Zm7.785 0h2.836c.164.64.262 1.307.262 2 0 .693-.098 1.36-.262 2h-2.836c.062-.647.098-1.314.098-2 0-.686-.036-1.353-.098-2Zm-11.83 6h2.332c.211 1.014.492 1.956.854 2.77.06.137.128.265.193.396A7.99 7.99 0 0 1 5.072 16Zm4.393 0h5.07c-.173.726-.375 1.403-.62 1.957-.324.728-.701 1.281-1.048 1.611-.347.33-.619.432-.867.432s-.52-.102-.867-.432-.723-.883-1.047-1.611c-.246-.554-.448-1.23-.621-1.957Zm7.13 0h2.333a7.99 7.99 0 0 1-3.38 3.166c.066-.13.133-.26.194-.396.362-.814.643-1.756.854-2.77Z" />
  ),
  //w49h56
  logo: (
    <>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M48.31 13.8 24.157 0 .006 13.8v27.603l24.152 13.8 24.151-13.8V13.8Zm-24.152-3.552-15.02 8.677v17.354l15.02-8.677 7.52 4.338-15.04 8.677 7.52 4.339 15.02-8.677V18.925l-15.02 8.677-7.52-4.339 15.04-8.677-7.52-4.338Z"
        clipRule="evenodd"
      />
      <path
        fill="#B3FF01"
        d="m24.158 27.602 7.52 4.338-15.04 8.677 7.52 4.339 15.02-8.677V18.925l-15.02 8.677ZM24.158 10.248 9.137 18.925v17.354l15.02-8.677-7.52-4.339 15.04-8.677-7.52-4.338Z"
      />
    </>
  ),
  //w20h20
  github: (
    <path
      fillRule="evenodd"
      d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 20 10c0-5.525-4.475-10-10-10Z"
      clipRule="evenodd"
    />
  ),
  //w20h21
  linkedin: (
    <path d="M17.778.13H2.222A2.222 2.222 0 0 0 0 2.354V17.91c0 1.227.994 2.222 2.222 2.222h15.556A2.222 2.222 0 0 0 20 17.909V2.353A2.222 2.222 0 0 0 17.778.131ZM6.667 15.687H3.863V7.91h2.804v7.777ZM5.216 6.483c-.857 0-1.43-.571-1.43-1.333s.572-1.334 1.524-1.334c.857 0 1.429.572 1.429 1.334 0 .762-.571 1.333-1.523 1.333Zm11.45 9.203h-2.713v-4.25c0-1.176-.723-1.447-.994-1.447s-1.176.18-1.176 1.446v4.251H8.98V7.91h2.803v1.085c.361-.633 1.085-1.085 2.441-1.085 1.357 0 2.443 1.085 2.443 3.526v4.251Z" />
  ),
  //w22h20
  telegram: (
    <path d="M20.736.263c-.356-.304-.915-.348-1.493-.114h-.001C18.634.395 2.031 7.571 1.355 7.864 1.232 7.907.158 8.311.269 9.21c.098.81.961 1.146 1.067 1.185l4.22 1.456c.28.94 1.313 4.405 1.542 5.145.142.462.374 1.068.78 1.193.358.139.713.012.943-.17l2.58-2.411 4.166 3.273.1.06c.282.126.553.19.812.19.2 0 .392-.038.575-.114.624-.258.874-.857.9-.925l3.112-16.298c.19-.87-.074-1.313-.33-1.531ZM9.28 12.433 7.856 16.26l-1.424-4.783 10.917-8.13-8.07 9.087Z" />
  ),
  //w20h20
  facebook: (
    <path d="M20 9.624C20 4.309 15.523 0 10 0S0 4.309 0 9.624c0 4.803 3.657 8.784 8.438 9.506v-6.724h-2.54V9.623h2.54v-2.12c0-2.412 1.492-3.745 3.777-3.745 1.094 0 2.238.188 2.238.188v2.369h-1.26c-1.243 0-1.63.741-1.63 1.502v1.806h2.773l-.443 2.781h-2.33v6.725C16.343 18.41 20 14.427 20 9.624Z" />
  ),
};
