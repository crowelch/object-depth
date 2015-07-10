'use strict';

var expect = require('chai').expect;
var objectDepth = require('./');

describe('object-depth', function(){
	it('object depth 0', function(done) {
		var depth = objectDepth({});
		expect(depth).to.equal(0);
		done();
	});

	it('object depth 1', function(done) {
		var depth = objectDepth({
			key: 'value'
		});
		expect(depth).to.equal(1);
		done();
	});

	it('object depth 5', function(done) {
		var depth = objectDepth({
			key: {
				key: {
					key: {
						key: {
							key: 'value'
						}
					}
				}
			}
		});
		expect(depth).to.equal(5);
		done();
	});

	it('more complex object, depth 3', function(done) {
		var depth = objectDepth({
			key: 'value'
		});
		expect(depth).to.equal(1);
		done();
	});
});
