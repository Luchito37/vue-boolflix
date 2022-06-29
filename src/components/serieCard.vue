
<template>
    <div class="d-flex justify-content-center">
        <div class="card text-bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-header"><h5>CARATTERISTICHE SERIE</h5></div>
            <div class="card-body">
                <p class="card-text">Titolo: {{serie.name}}</p>
                <p class="card-text">Titolo originale: {{serie.original_name}}</p>
                <p class="card-text">Lingua originale: {{serie.original_language}}</p>
                <p class="card-text">Voto: {{serie.vote_average}}</p>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    
    name: "serieCard",

    props: {
        serie: Object,
    },
}
</script>