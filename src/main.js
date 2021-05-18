import Vue from 'vue';
import './style.scss';

import genres from './util/genres.js';

new Vue(
    {
        el: '#app',
        components: {
            'movie-list': {
                template: `<div id="movie-list">
								<div v-for="movie in movies"class="movie">{{ movie.title }}</div>
						</div>`,
                data() {
                    return {
                        movies: [
                            { title: 'Pulp Fiction' },
                            { title: 'Home Alone' },
                            { title: 'Avengers' }
                        ]
                    }
                }
            },
            'movie-filter': {
                data() {
                    return {
                        genres
                    }
                },
                template: `<div id="movie-filter">
							<h2>Filter results</h2>
                            <div class="filter-group">
                            <check-filter v-for="genre in genres" title="My title"></check-filter>
                            </div>
                            </div>`,
                components: {
                    'check-filter': {
                        props: [ 'title'],
                        template: `<div>Filter</div>`
                    }

                }

            }
        }

    });
