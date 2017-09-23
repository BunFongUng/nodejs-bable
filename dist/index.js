'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _constants = require('./config/constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

const app = (0, _express2.default)();

app.listen(_constants2.default.PORT, () => {
  console.log(`Server is running on port: ${_constants2.default.PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJsaXN0ZW4iLCJQT1JUIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztBQUVBOzs7Ozs7QUFKQTs7QUFNQSxNQUFNQSxNQUFNLHdCQUFaOztBQUVBQSxJQUFJQyxNQUFKLENBQVcsb0JBQVVDLElBQXJCLEVBQTJCLE1BQU07QUFDL0JDLFVBQVFDLEdBQVIsQ0FBYSw4QkFBNkIsb0JBQVVGLElBQUssRUFBekQ7QUFDQUMsVUFBUUMsR0FBUixDQUFhLGdCQUFlQyxRQUFRQyxHQUFSLENBQVlDLFFBQVMsRUFBakQ7QUFDRCxDQUhEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuL2NvbmZpZy9jb25zdGFudHMnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC5saXN0ZW4oY29uc3RhbnRzLlBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQ6ICR7Y29uc3RhbnRzLlBPUlR9YCk7XG4gIGNvbnNvbGUubG9nKGBFbnZpcm9ubWVudDogJHtwcm9jZXNzLmVudi5OT0RFX0VOVn1gKTtcbn0pO1xuIl19