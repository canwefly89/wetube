import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";  // 변수명처럼 동작함
  res.locals.routes = routes;  // 변수명처럼 동작함
  next();
}