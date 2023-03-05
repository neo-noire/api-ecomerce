// module.exports = ({ env }) => ({
//     proxy: true,
//     url: env('APP_URL'), // Sets the public URL of the application.
//     app: { 
//       keys: env.array('APP_KEYS')
//     },
// });

module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "/data/public"
  },
});