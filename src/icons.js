const icons = {
  star: `<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>`,
  commits: `<path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"/>`,
  prs: `<path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>`,
  issues: `<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>`,
  icon: `<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>`,
  contribs: `<path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>`,
  fork: `<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>`,
  hits:`<path fill-rule="evenodd" d="M 15.914062 10.101562 C 15.910156 10.070312 15.902344 10.039062 15.894531 10.011719 L 15.882812 9.988281 C 15.832031 9.789062 15.757812 9.59375 15.667969 9.40625 L 13.898438 4.621094 C 13.738281 4.140625 13.433594 3.722656 13.019531 3.429688 L 12.957031 2.980469 C 12.953125 2.960938 12.949219 2.941406 12.941406 2.921875 C 12.707031 2.214844 12.042969 1.738281 11.296875 1.742188 C 10.359375 1.742188 9.582031 2.507812 9.5625 3.449219 L 9.5625 3.464844 L 9.578125 4.15625 C 9.414062 4.433594 9.3125 4.738281 9.273438 5.054688 L 6.730469 5.054688 C 6.6875 4.738281 6.585938 4.433594 6.425781 4.160156 L 6.4375 3.476562 C 6.4375 3.472656 6.4375 3.46875 6.4375 3.464844 C 6.417969 2.523438 5.640625 1.757812 4.707031 1.757812 C 3.960938 1.753906 3.296875 2.230469 3.058594 2.9375 C 3.050781 2.957031 3.046875 2.976562 3.042969 2.996094 L 2.980469 3.429688 C 2.570312 3.722656 2.261719 4.140625 2.105469 4.621094 L 0.332031 9.40625 C 0.242188 9.59375 0.171875 9.789062 0.117188 9.988281 L 0.109375 10.011719 C 0.0976562 10.042969 0.0898438 10.070312 0.0898438 10.101562 C -0.335938 11.925781 0.800781 13.746094 2.625 14.171875 C 4.449219 14.59375 6.269531 13.457031 6.691406 11.632812 C 6.75 11.382812 6.78125 11.125 6.78125 10.867188 C 6.78125 10.832031 6.78125 10.792969 6.777344 10.757812 C 6.78125 10.742188 6.78125 10.730469 6.78125 10.71875 L 6.773438 9.542969 L 9.226562 9.542969 L 9.21875 10.785156 C 9.21875 10.792969 9.222656 10.800781 9.222656 10.804688 C 9.222656 10.824219 9.21875 10.847656 9.21875 10.867188 C 9.222656 12.738281 10.738281 14.257812 12.613281 14.253906 C 14.484375 14.253906 16 12.738281 16 10.863281 C 16 10.609375 15.96875 10.351562 15.914062 10.101562 Z M 4.707031 2.460938 C 5.242188 2.460938 5.691406 2.886719 5.734375 3.421875 C 5.160156 3.019531 4.4375 2.886719 3.761719 3.066406 C 3.929688 2.695312 4.296875 2.457031 4.707031 2.460938 Z M 2.761719 4.859375 C 2.765625 4.855469 2.765625 4.851562 2.769531 4.847656 C 3.058594 3.964844 4.007812 3.484375 4.890625 3.773438 C 5.25 3.890625 5.558594 4.125 5.765625 4.4375 C 5.773438 4.449219 5.78125 4.460938 5.789062 4.472656 C 5.957031 4.734375 6.046875 5.042969 6.046875 5.355469 L 6.066406 8.789062 C 5.003906 7.417969 3.078125 7.074219 1.605469 7.988281 Z M 5.804688 12.050781 C 5.355469 12.972656 4.417969 13.554688 3.390625 13.554688 C 1.90625 13.554688 0.703125 12.351562 0.703125 10.867188 C 0.703125 10.640625 0.730469 10.417969 0.785156 10.199219 L 0.976562 9.6875 C 1.628906 8.351562 3.238281 7.800781 4.574219 8.453125 C 5.90625 9.105469 6.457031 10.714844 5.804688 12.050781 Z M 9.234375 8.839844 L 6.769531 8.839844 L 6.765625 8.316406 L 9.234375 8.316406 Z M 9.242188 7.613281 L 6.761719 7.613281 L 6.75 5.753906 L 9.253906 5.753906 Z M 11.296875 2.441406 C 11.710938 2.441406 12.085938 2.6875 12.25 3.066406 C 11.566406 2.886719 10.84375 3.015625 10.265625 3.421875 C 10.300781 2.878906 10.753906 2.441406 11.296875 2.441406 Z M 9.957031 5.351562 C 9.957031 4.433594 10.710938 3.6875 11.636719 3.6875 C 11.9375 3.6875 12.230469 3.769531 12.488281 3.917969 C 12.503906 3.933594 12.523438 3.941406 12.542969 3.953125 C 12.867188 4.160156 13.113281 4.476562 13.234375 4.847656 C 13.234375 4.851562 13.234375 4.855469 13.238281 4.859375 L 14.394531 7.988281 C 12.921875 7.074219 10.996094 7.417969 9.933594 8.789062 Z M 13.277344 13.472656 C 13.058594 13.527344 12.835938 13.554688 12.609375 13.554688 C 11.125 13.554688 9.921875 12.351562 9.921875 10.867188 C 9.921875 9.382812 11.125 8.179688 12.609375 8.179688 C 13.636719 8.179688 14.574219 8.761719 15.023438 9.6875 L 15.214844 10.199219 C 15.582031 11.640625 14.714844 13.105469 13.277344 13.472656 Z M 13.277344 13.472656 "/> `
};


module.exports = icons;
