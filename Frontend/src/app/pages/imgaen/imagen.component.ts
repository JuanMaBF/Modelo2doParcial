import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
    selector: 'imagen',
    templateUrl: './imagen.component.html'
}) export class ImagenComponent {

    public codModelo: string;

    public fileName: string;
    public fileLink: string;
    public showSpinner: boolean = false;

    constructor(private afStorage: AngularFireStorage){
    }

    public uploadFile(event) {
        this.showSpinner = true;
        let ref = this.afStorage.ref(this.codModelo);
        ref.put(event.target.files[0]).then(() => {
            this.fileName = this.codModelo;
            this.fileLink = "https://firebasestorage.googleapis.com/v0/b/tplab4-3498e.appspot.com/o/" + this.fileName + "?alt=media&token=8d6b919e-63c6-4998-ad7b-f041dd13ace7"
            this.showSpinner = false;
        });
    }

    public deleteImg() {
        this.fileName = undefined;
        this.fileLink = undefined;
    }

}
