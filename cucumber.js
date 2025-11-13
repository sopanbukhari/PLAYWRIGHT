module.exports = {
  default: {
    require: ['steps/*.js'],
    format: ['progress', 'html:cucumber-report.html'],
    paths: ['features/*.feature'],
    publishQuiet: true,
  },
};
