import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PwGeneratorCryptoService} from './pw-generator-crypto.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-pw-generator',
  templateUrl: './pw-generator.component.html',
  styleUrls: ['./pw-generator.component.scss'],
  providers: [PwGeneratorCryptoService]
})
export class PwGeneratorComponent implements OnInit {

  @ViewChild('generated') generatedPasswordInput: ElementRef;

  @ViewChild('toast') passwordSuccessToast: ElementRef;

  password = '';

  constructor(private cryptoService: PwGeneratorCryptoService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onPasswordGenerate(length: number) {
    this.password = this.cryptoService.generatePassword(length);
    // trigger focus on password field
    this.generatedPasswordInput.nativeElement.focus();
    this.copyToClipboard(this.password);
    this.toastr.success('Password copied to clipboard', null , {closeButton: true});
  }

  copyToClipboard(text: string) {
    const listener = (ev) => {
      ev.preventDefault();
      ev.clipboardData.setData('text/plain', text);
    };
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }

}
