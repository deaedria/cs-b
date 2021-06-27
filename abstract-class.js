class sortAbstract {
    constructor(koleksi) {
        this.koleksi = koleksi
    }

    sorting() {
        console.log(`koleksi = [${this.koleksi}]`)
    }
}

class insertionSort extends sortAbstract {
    constructor(koleksi) {
        super(koleksi)
    }

    sort() {
        this.sorting()
        const res = this.getSort()
        console.log(`Insertion Sort : [${res}]`)
    }

    getSort(){
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
}

module.exports = insertionSort;