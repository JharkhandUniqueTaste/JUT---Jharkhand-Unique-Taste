const JUT_DEFAULT_CONFIG = {
  whatsappNumber: '919973027817',
  contactNumber: '9973027817',
  currentLocation: 'Jharkhand University of Technology, Ranchi',
  todayHours: '11:00 AM — 9:00 PM',
  directionsQuery: 'Jharkhand University of Technology Ranchi',
  directionsUrl: 'https://www.google.com/maps/place/Jharkhand+University+of+Technology/@23.3156176,85.3720257,17z/data=!4m14!1m7!3m6!1s0x39f4e37df98cd005:0x524e05d7c9e840b0!2sJharkhand+University+of+Technology!8m2!3d23.3156176!4d85.3746006!16s%2Fg%2F11h0mkqp00!3m5!1s0x39f4e37df98cd005:0x524e05d7c9e840b0!8m2!3d23.3156176!4d85.3746006!16s%2Fg%2F11h0mkqp00?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D'
};
const JUT_CONFIG = (() => {
  try {
    const saved = JSON.parse(localStorage.getItem('jutConfig')) || {};
    if (saved.currentLocation === 'Sakchi Market, Jamshedpur') saved.currentLocation = JUT_DEFAULT_CONFIG.currentLocation;
    if (saved.directionsQuery === 'Sakchi Market Jamshedpur') saved.directionsQuery = JUT_DEFAULT_CONFIG.directionsQuery;
    return {...JUT_DEFAULT_CONFIG, ...saved};
  } catch (error) {
    return {...JUT_DEFAULT_CONFIG};
  }
})();
