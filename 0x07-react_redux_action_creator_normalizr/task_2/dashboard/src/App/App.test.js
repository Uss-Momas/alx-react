/**
 * @jest-environment jsdom
 */
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { shallow, mount } from 'enzyme';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('rendering components', () => {
	it('renders App component without crashing', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.exists()).toBe(true);
	});

	it('App contains Notifications component', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.find(Notifications)).toHaveLength(1);
	});

	it('App contains Header component', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.contains(<Header />)).toBe(true);
	});

	it('App contains Login component', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.contains(<Login />)).toBe(true);
	});

	it('App contains Footer component', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.contains(<Footer />)).toBe(true);
	});

	it('checks CourseList is not rendered', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.contains(<CourseList />)).toBe(false);
	});
});

describe('when isLogged in is true', () => {
	const wrapper = shallow(<App isLoggedIn={true} />);

	it('checks Login is not rendered', () => {
		expect(wrapper.contains(<Login />)).toBe(false);
	});

	it('checks CourseList is rendered', () => {
		expect(wrapper.find(CourseList)).toHaveLength(1);
	});
});

describe('when Ctrl+h pressed', () => {
	it('checks logOut function is called', () => {
		const mockFn = jest.fn();
		const wrapper = mount(<App logOut={mockFn} />);
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });

		document.dispatchEvent(event);
		expect(mockFn).toHaveBeenCalled();
		wrapper.unmount();
	});

	window.alert = jest.fn();
	it('checks alert function is called', () => {
		const wrapper = mount(<App />);
		const spy = jest.spyOn(window, 'alert');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(spy).toHaveBeenCalled();
		spy.mockRestore();
		wrapper.unmount();
	});

	it('checks alert string is "Logging you out"', () => {
		const wrapper = mount(<App />);
		const spy = jest.spyOn(window, 'alert');
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		document.dispatchEvent(event);

		expect(spy).toHaveBeenCalledWith('Logging you out');
		jest.restoreAllMocks();
		wrapper.unmount();
	});
	window.alert.mockClear();
});

describe('testing state of App.js', () => {
	it('displayDrawer initial value should be set to false', () => {
		const wrapper = mount(<App />);

		expect(wrapper.state().displayDrawer).toBe(false);
	});

	it('should set displayDrawer to true after calling handleDisplayDrawer', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer();

		expect(wrapper.state().displayDrawer).toBe(true);
	});

	it('should set displayDrawer to false after calling handleHideDrawer', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleHideDrawer();

		expect(wrapper.state().displayDrawer).toBe(false);
	});
});