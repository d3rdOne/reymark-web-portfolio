import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const appAnimation =trigger('routeAnimate', [
	transition('Home => Projects', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('300ms ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('300ms ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('Projects => Home', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('300ms ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('300ms ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
])