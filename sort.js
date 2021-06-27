class Sort {
    constructor(koleksi) {
        this.koleksi = koleksi
    }

    insertionSort() {
        let koleksi = this.koleksi
        let temp
        for (let i = 1; i < koleksi.length; i++) {
            let j = i
            temp = koleksi[i]
            while (j > 0 && temp < koleksi[j - 1]) {
                koleksi[j] = koleksi[j - 1]
                j--
            }
            koleksi[j] = temp
        }
        return koleksi
    }

    sort(algoritma) {
        if (algoritma === 'insertion') {
            console.log('Insertion Sort')
            return this.insertionSort()
        } else {
            return ['algoritma tidak support']
        }
    }
}

module.exports = Sort;