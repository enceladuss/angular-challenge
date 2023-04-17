import {Component} from '@angular/core';
import {AccordionItem} from './components/accordion/accordion-item-interface';
import {LoaderType} from './components/loader/models/loader-type.enum';
import {fadeInOutAnimation} from './other/fade-in-out.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AppComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut deleniti, dignissimos ea facilis hic iste laboriosam nisi nulla placeat possimus quam quo rem, veritatis vero voluptatem. Accusamus architecto, cum cupiditate, dolorum eius eos exercitationem fuga fugit harum inventore ipsum iure labore laborum magni minima minus modi molestias mollitia non odit omnis qui quos recusandae reiciendis reprehenderit sequi velit voluptates. Animi deleniti, doloribus harum id illum iste libero magnam magni minus natus optio placeat porro qui reprehenderit repudiandae saepe sequi soluta suscipit unde voluptas. Aliquam beatae esse impedit ipsum, quaerat ratione velit vero? Asperiores at consequatur culpa debitis delectus deserunt doloribus, eaque eligendi facilis fugiat in perferendis, placeat quasi quis repudiandae rerum similique vel! Adipisci architecto assumenda consectetur culpa, debitis dignissimos dolore doloremque eum explicabo facilis harum itaque iusto laboriosam laudantium libero nesciunt officiis quae quia quisquam reiciendis tempora ullam, unde ut vel veniam! Aperiam at consequatur fugiat, hic omnis quae vel veritatis. A ad alias animi atque, beatae delectus dolor eligendi esse hic illum in iure iusto necessitatibus nihil officiis perferendis quas repellat sint, temporibus velit. Aliquid aut beatae consequuntur deserunt dicta eligendi et, id in iusto labore officiis pariatur perferendis sed temporibus veritatis? Ab accusamus aperiam assumenda aut, culpa, debitis dolorum enim excepturi exercitationem illum inventore ipsa natus nisi non obcaecati officia praesentium sint suscipit tempora tempore. Animi architecto quidem repellendus? Accusantium esse fuga minus, nihil quia repudiandae. Cupiditate impedit maiores quam quibusdam voluptatibus. Accusantium aperiam assumenda atque blanditiis cupiditate doloremque dolorum enim eum, fugit in maxime minima mollitia nihil obcaecati odit officiis porro quam quasi reprehenderit sapiente sequi tempore vel. Autem consequuntur debitis esse eveniet excepturi, illo in nam sit! Aliquam commodi culpa cupiditate dignissimos, dolor est et eum facilis incidunt maiores molestiae mollitia necessitatibus nobis pariatur perferendis perspiciatis quam reiciendis repudiandae rerum sequi soluta voluptas.',
      isExpanded: false
    },
    {
      title: 'Example 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut deleniti, dignissimos ea facilis hic iste laboriosam nisi nulla placeat possimus quam quo rem, veritatis vero voluptatem. Accusamus architecto, cum cupiditate, dolorum eius eos exercitationem fuga fugit harum inventore ipsum iure labore laborum magni minima minus modi molestias mollitia non odit omnis qui quos recusandae reiciendis reprehenderit sequi velit voluptates. Animi deleniti, doloribus harum id illum iste libero magnam magni minus natus optio placeat porro qui reprehenderit repudiandae saepe sequi soluta suscipit unde voluptas. Aliquam beatae esse impedit ipsum, quaerat ratione velit vero? Asperiores at consequatur culpa debitis delectus deserunt doloribus, eaque eligendi facilis fugiat in perferendis, placeat quasi quis repudiandae rerum similique vel! Adipisci architecto assumenda consectetur culpa, debitis dignissimos dolore doloremque eum explicabo facilis harum itaque iusto laboriosam laudantium libero nesciunt officiis quae quia quisquam reiciendis tempora ullam, unde ut vel veniam! Aperiam at consequatur fugiat, hic omnis quae vel veritatis. A ad alias animi atque, beatae delectus dolor eligendi esse hic illum in iure iusto necessitatibus nihil officiis perferendis quas repellat sint, temporibus velit. Aliquid aut beatae consequuntur deserunt dicta eligendi et, id in iusto labore officiis pariatur perferendis sed temporibus veritatis? Ab accusamus aperiam assumenda aut, culpa, debitis dolorum enim excepturi exercitationem illum inventore ipsa natus nisi non obcaecati officia praesentium sint suscipit tempora tempore. Animi architecto quidem repellendus? Accusantium esse fuga minus, nihil quia repudiandae. Cupiditate impedit maiores quam quibusdam voluptatibus. Accusantium aperiam assumenda atque blanditiis cupiditate doloremque dolorum enim eum, fugit in maxime minima mollitia nihil obcaecati odit officiis porro quam quasi reprehenderit sapiente sequi tempore vel. Autem consequuntur debitis esse eveniet excepturi, illo in nam sit! Aliquam commodi culpa cupiditate dignissimos, dolor est et eum facilis incidunt maiores molestiae mollitia necessitatibus nobis pariatur perferendis perspiciatis quam reiciendis repudiandae rerum sequi soluta voluptas.',
      isExpanded: false
    }
  ];
  public progressValue = 20;
  public loaderType = LoaderType.Loading;
  public debounceSearchCurrentValue;
  public selectedTab = 0;
  public tabs = [
    {title: 'Test', active: true},
    {title: 'lorem', active: false}
  ];
  public isDOM = false;

  public consoleLog(...args): void {
    console.log(args);
  }

  public debounceExampleMethod(value: string): void {
    this.debounceSearchCurrentValue = value;
  }
}
