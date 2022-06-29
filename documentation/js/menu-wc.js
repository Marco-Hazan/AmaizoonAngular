'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">amaizoon-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cfa9c609ef0caf0c5db864c7fca9a615cbeebc16ffda97165575d4e73a109f132f92c46e692ac93745325591d57726f86d3378c85226bc961e347803200994e6"' : 'data-target="#xs-components-links-module-AppModule-cfa9c609ef0caf0c5db864c7fca9a615cbeebc16ffda97165575d4e73a109f132f92c46e692ac93745325591d57726f86d3378c85226bc961e347803200994e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cfa9c609ef0caf0c5db864c7fca9a615cbeebc16ffda97165575d4e73a109f132f92c46e692ac93745325591d57726f86d3378c85226bc961e347803200994e6"' :
                                            'id="xs-components-links-module-AppModule-cfa9c609ef0caf0c5db864c7fca9a615cbeebc16ffda97165575d4e73a109f132f92c46e692ac93745325591d57726f86d3378c85226bc961e347803200994e6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-4d5b3016ef0d443a4b0c3d6324e50b8e2bdfc0325d8447a5d47ab6be737b90b2af20f0dc5c8443bec55491ce1bfd42b8a7dd4612b353003c895c91eb718c08b1"' : 'data-target="#xs-components-links-module-CoreModule-4d5b3016ef0d443a4b0c3d6324e50b8e2bdfc0325d8447a5d47ab6be737b90b2af20f0dc5c8443bec55491ce1bfd42b8a7dd4612b353003c895c91eb718c08b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-4d5b3016ef0d443a4b0c3d6324e50b8e2bdfc0325d8447a5d47ab6be737b90b2af20f0dc5c8443bec55491ce1bfd42b8a7dd4612b353003c895c91eb718c08b1"' :
                                            'id="xs-components-links-module-CoreModule-4d5b3016ef0d443a4b0c3d6324e50b8e2bdfc0325d8447a5d47ab6be737b90b2af20f0dc5c8443bec55491ce1bfd42b8a7dd4612b353003c895c91eb718c08b1"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RiepilogoCarrelloComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiepilogoCarrelloComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModelModule.html" data-type="entity-link" >ModelModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ModelModule-3305991697c34712573bdaf6fe5e144438a0bc700d0c2f83943589b61f7c9362138d8eb2bb5daf6dad2839ec6c8c1c901ec1f0f935c085756be3af0a1e4e36b3"' : 'data-target="#xs-injectables-links-module-ModelModule-3305991697c34712573bdaf6fe5e144438a0bc700d0c2f83943589b61f7c9362138d8eb2bb5daf6dad2839ec6c8c1c901ec1f0f935c085756be3af0a1e4e36b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModelModule-3305991697c34712573bdaf6fe5e144438a0bc700d0c2f83943589b61f7c9362138d8eb2bb5daf6dad2839ec6c8c1c901ec1f0f935c085756be3af0a1e4e36b3"' :
                                        'id="xs-injectables-links-module-ModelModule-3305991697c34712573bdaf6fe5e144438a0bc700d0c2f83943589b61f7c9362138d8eb2bb5daf6dad2839ec6c8c1c901ec1f0f935c085756be3af0a1e4e36b3"' }>
                                        <li class="link">
                                            <a href="injectables/CarrelloService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarrelloService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProdottoRepositoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProdottoRepositoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StaticDatasourceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StaticDatasourceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ItemCarrello.html" data-type="entity-link" >ItemCarrello</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CarrelloService.html" data-type="entity-link" >CarrelloService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProdottoRepositoryService.html" data-type="entity-link" >ProdottoRepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaticDatasourceService.html" data-type="entity-link" >StaticDatasourceService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Prodotto.html" data-type="entity-link" >Prodotto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});