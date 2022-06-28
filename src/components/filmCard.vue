<template>
    <div class="d-flex justify-content-center">
        <div class="card text-bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-header"><h5>CARATTERISTICHE</h5></div>
            <div class="card-body">
                <p class="card-text">Titolo: {{movie.title}}</p>
                <p class="card-text">Titolo originale: {{movie.original_title}}</p>
                <p class="card-text">Lingua originale: {{movie.original_language}}</p>
                <p class="card-text">Voto: {{movie.vote_average}}</p>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {

    name: "MovieCard",

    props: {
        movie: Object,
    }
}
</script>
