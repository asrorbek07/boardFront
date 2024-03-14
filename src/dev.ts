import {DevAuth, DevDock} from "@vizendjs/dock-ui";

// const dev = process.env.NODE_ENV !== "production";
const dev = false;

const auth = <DevAuth>{
  development: dev,
  user: {
    username: "director",
    displayName: "관리자",
    pavilionId: "1:1:1",
    email: "director@amc.kr",
    additionalInformation: {},
  },
  // token: {
  //   access:
  //     "eyJraWQiOiJuYXJhIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJsb2NhbCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6OTAwMiIsImRpc3BsYXlfbmFtZSI6ImxvY2FsIiwiYXVkIjoibmFyYSIsInBhc3N3b3JkIjoiIiwibmJmIjoxNjc5Mjc1MDA4LCJzY29wZSI6WyJpbnRlcm5hbCJdLCJhdHRyaWJ1dGVzIjp7ImNpdGl6ZW5faWQiOiIwQDA6MDowIiwicGF2aWxpb25faWQiOiIwOjA6MCIsImNpbmVyb29tX2lkcyI6W10sInVzaWQiOiJsb2NhbCJ9LCJleHAiOjE3MTA4MTEwMDgsImlhdCI6MTY3OTI3NTAwOCwianRpIjoiZXlnZU5aZ0ZRNWo4ejVuMW00VWlhViIsImVtYWlsIjoiIiwidXNlcm5hbWUiOiJsb2NhbCJ9.hUyhCW-Z0WE6E5u53qBt6AsCgjERMhJ74IW-EA9xpGlLy9BBZ86cXHa_OWCJVraHu8dPQD28CTR9FaVUlPhYwtZ7O64G_NTx_ESJvRMWhjz0zohs6RdDh16805xcLfh3xaQggXOc2EVb1nE_c1OlBK2k4T32MfU2pxOnWEZSQF_swIZeqpaM6irqMdnNnAivGVQ8ixSmR9JDUFZPPrmZm7HMJcBpOhsYqVfrgQD6_GzUWNn1NirKfXWzftva_SWzM8XgOHNF-sJkjV7KJqlKVCTTjtH7C11opihTJhIEWKcQn_YC0D8iG-ZFSPMxaFVbPwXxrKSMQ8VH1jpqnKGESA",
  //   refresh:
  //     "eyJraWQiOiJuYXJhIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJsb2NhbCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6OTAwMiIsImRpc3BsYXlfbmFtZSI6ImxvY2FsIiwiYXVkIjoibmFyYSIsInBhc3N3b3JkIjoiIiwibmJmIjoxNjc5Mjc1MDA4LCJzY29wZSI6WyJpbnRlcm5hbCJdLCJhdGkiOiJleWdlTlpnRlE1ajh6NW4xbTRVaWFWIiwiYXR0cmlidXRlcyI6eyJjaXRpemVuX2lkIjoiMEAwOjA6MCIsInBhdmlsaW9uX2lkIjoiMDowOjAiLCJjaW5lcm9vbV9pZHMiOltdLCJ1c2lkIjoibG9jYWwifSwiZXhwIjoxNjc5ODc5ODA4LCJpYXQiOjE2NzkyNzUwMDgsImp0aSI6IjNhMXlvVmhRNDdFYW0xY0NMa2NJR1giLCJlbWFpbCI6IiIsInVzZXJuYW1lIjoibG9jYWwifQ.PiLPvdMH8WRd8n5gDDERL2FnVKOIoXPVkEpBQk9dWJukjYDdieeFiiA44bX4t6PPAPCUq4ldVU0PLa8hmokKdmEOoynXJjPCWpLwvDD69qZdhV87IcfV0hUJk0Hf19wWOyp-c9jw6Gj55a0UWZ9pOj55GL7COtVPZ0A2j_ozXcRDzQHgIJ6GVD8PACJF6CA7-kvclsYrRUwReu3rt-9q3Q35zpGiy5RsWvUf-WOvip5aVveJIz4zc3FyMUkw1_7Qw_rntXoyjh0-ua8UvOTCuk4X0HyemYmqzWAY-qAG_HS3FahqE6z_yCawcb_DsoQyRhjKXttMJYqrWx13L3GtMg",
  //   refreshed: false,
  //   remembered: false,
  // },
};

const dock = {
  development: dev,
  session: {
    pavilion: { id: "1:1:1", name: "nextree" },
    citizen: { id: "1@1:1:1", name: "관리자" },
    cinerooms: [
      {
        cineroom: { id: "1:1:1:1", name: "Vizend Public" },
        audience: { id: "1@1:1:1:1", name: "관리자" },
        active: true,
        stages: [
          {
            stage: { id: "1:1:1:1-1", name: "Vizend Drama" },
            actor: { id: "1@1:1:1:1-1", name: "관리자" },
            active: true,
            kollections: [
              {
                kollection: {
                  code: "board",
                  name: "Board",
                },
                path: "admin",
                active: true,
                kollecties: [
                  {
                    path: "admin",
                    name: "Admin",
                    requiredRoles: ["director"],
                  },
                ],
                kollectionRoles: [
                  {
                    code: "director",
                    name: "Admin",
                    defaultRole: true,
                    dramaRoles: [
                      {
                        dramaId: "board",
                        code: "director",
                        name: "Director",
                        description: "Vizend Admin",
                        defaultRole: false,
                      },
                      {
                        dramaId: "board",
                        code: "user",
                        name: "User",
                        description: "Vizend User",
                        defaultRole: true,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    defaultStage: { id: "1:1:1:1-1", name: "Vizend Public Drama" },
    defaultFirstForStage: true,
  },
} as unknown as DevDock;

export default {
  development: dev,
  auth,
  dock,
};
