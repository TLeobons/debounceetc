import * as Sentry from "@sentry/react"

const init = () => {
Sentry.init({
  dsn: "https://22930c0cc6c546f2b19dd7b246b4cd4b@o414518.ingest.sentry.io/5304147",
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
})
}

const log = error => {
  Raven.captureException(error)
}

export default {
  init,
  log
}